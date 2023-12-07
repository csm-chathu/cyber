"use client";
import { Autocomplete,  Box,  Button, FormControl,  FormHelperText,  Grid, Select,
                            TextField, Typography,  TextFieldProps, } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loader from "../../atomic/loader";
import NotFound from "../../atomic/notfound";

const textProps: TextFieldProps = {
  id: "outlined-basic",
  variant: "outlined",
  fullWidth: true,
  InputLabelProps: {
    shrink: true,
  },
};

export default function ServicesSelf({ obj, setObj, setAct }: any) {
  const theme = useTheme();
  const [service, setService] = useState([]);
  const [serviceCategory, setServiceCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [serviceError, setServiceError] = useState(false);
  const [defaultService, setDefaultService] = useState([]);
  const [load, setLoad] = useState(false);

  let sendEmail = async () => {
    const services = await fetch("/api/serice-price", {
      method: "GET",
    }).then((response) => response.json());

    setService(services.option);
    setDefaultService(services.option);
    setServiceCategory(services.category);
    setTimeout(() => {
      setLoad(false);
    }, 500);
  };
  useEffect(() => {
    setLoad(true);
    sendEmail();
  }, []);

  const [serviceSelected, setServiceNameSelected] = useState<string[]>([]);
  const handleChangeMultiple = (event: any) => {
    const { options } = event.target;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setServiceNameSelected(value);
  };

  const searchCode = (val: string, cat: boolean = false) => {
    if (val == "") {
      if(selectedCategory){
        var ans:any = defaultService.filter(function (v: any, i: number) {
          if ( v.value['Service Category']==selectedCategory ) {
            return true;
          } else false;
        });
        return setService(ans);
      }
      return setService(defaultService);
    }
    
    filterByValue(defaultService, val, cat);
  };

  function filterByValue(arrayOfObject: any, term: string, cat: boolean) {
    if (!cat) {
      if(selectedCategory){
      var ans:any = defaultService.filter(function (v: any, i: number) {
        if ( v.label.toLowerCase().indexOf(term) >= 0  && v.value['Service Category']==selectedCategory ) {
          return true;
        } else false;
      });
      setService(ans);
    }else{
      var ans:any = defaultService.filter(function (v: any, i: number) {
        if ( v.label.toLowerCase().indexOf(term) >= 0) {
          return true;
        } else false;
      });
      setService(ans);
    }
    } else {
      if(term){
        setSelectedCategory(term);
          var ans:any = defaultService.filter((item: any) => {
                return item.value['Service Category']==term;
              });
              setService(ans);
      }else{
        setSelectedCategory('');
        setService(defaultService);
      }

    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let submitHandler = async (service: any) => {
    setServiceError(false);
    if (serviceSelected.length == 0) {
      return setServiceError(true);
    }
    let selected = defaultService.filter(
      (item: any) => item.id == serviceSelected
    );
    if (selected.length > 0) {
      let conArr = { ...obj, service: selected[0] };
      conArr.ref = obj.ref ? obj.ref : "REF" + new Date().getTime();
      conArr.insurance.insured="Self-Pay";
      setObj(conArr);
      setAct(3);
    }
  };
  useEffect(() => {
    setServiceNameSelected(obj?.service?.id?.toString() || "");
  }, [defaultService]);
  return (
    <Grid sx={{position:'relative',width:'100%'}}>   
    {/* <Loader/> */}
      {load ? (<Loader/>) : null} 

      {/* {serviceSelected} */}
      {/* <Typography textAlign="left" sx={{
          fontSize: "24px",
          fontWeight: 500,
          mb: 3,
          mt:3
        }} > Select Medical Service </Typography> */}

      <form onSubmit={handleSubmit(submitHandler)} id="hook-form-service">
        <Grid container direction="row" sx={{mt:3}}>
          <Grid item xs={12} md={6} sx={{ pt: 1,pr:{ xs: 0,  sm: 1} }}>
            <label>Select Healthcare Category</label>
            <Autocomplete
              disablePortal
              {...register("cat")}
              id="combo-box-demo"
              options={serviceCategory}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select Category" key="id" />
              )}
              onChange={(event, value: any) => searchCode(value?.label, true)}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ pt: 1 }}>
            <label>Search by Service Description or Code</label>
            <TextField
              {...textProps}
              onChange={(e) => searchCode(e.target.value)}
              placeholder="Description or CPT/HCPCS/DRG Code"
            />
          </Grid>
          <Grid item xs={12} sx={{ pt: 3 }}>
            <label>Service</label>
            {service.length>0 ? <><FormControl error={serviceError} sx={{ width: "100%" }}>
              <Select
                multiple
                native
                value={serviceSelected}
                onChange={handleChangeMultiple}
                label="Native"
                inputProps={{
                  id: "select-multiple-native",
                }}
              >
                {service.map((item: any, i) => (
                  <option key={i} value={item?.id} style={{padding: '8px'}}>
                    {item.label}
                  </option>
                ))}
              </Select>
              <FormHelperText>
                {serviceError ? "Service type required" : null}
              </FormHelperText>
            </FormControl></>
            :<NotFound/>}
          </Grid>
        </Grid>

        <Grid  display="flex" gap={1}  sx={{  mt: 6, }} >
          <Grid item  md={6}  display="flex" container direction="row" alignItems="left" justifyContent="left"  sx={{ pl: 2,  }} >
            <Button  variant="text" color="success"
              sx={{
                padding: "5px 25px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: "8px",
                border: "none",
                backgroundColor: theme.palette.secondary.main,
              }}  onClick={() => setAct(0)} >
              <ArrowBackIcon /> Go Back
            </Button>
          </Grid>
          <Grid  md={6}  item  display="flex" container  direction="row" alignItems="right"  justifyContent="right" sx={{ pr: 2, }} >
            <Button  type="submit"  variant="contained" color="success" sx={{
                padding: "5px 25px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: "8px",
              }} >  Continue </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
