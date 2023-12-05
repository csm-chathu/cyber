"use client";
import ServicesSelf from "../../atomic/services/self-pay";
import Insurace from "../../atomic/services/insurance";


export default function Services({ obj, setObj, setAct }: any) {
  return (
    <>
    {obj?.insurance?.insured == 'Insured' ? 
      (<Insurace obj={obj} setObj={setObj} setAct={setAct}/>) :
      (<ServicesSelf obj={obj} setObj={setObj} setAct={setAct}/>)
  }

    
    {/* <ServicesSelf obj={obj} setObj={setObj} setAct={setAct}/> */}
    
      {/* {serviceSelected} */}
      {/* <Typography textAlign="left" sx={{
          fontSize: "24px",
          fontWeight: 500,
          mb: 3,
        }} > Select Medical Service </Typography> */}

      {/* <form onSubmit={handleSubmit(submitHandler)} id="hook-form-service">
        <Grid container direction="row">
          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <label>Select Healthcare Category</label>
            <Autocomplete
              disablePortal
              {...register("cat")}
              id="combo-box-demo"
              options={serviceCategory}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select Category" key="id" />
              )}
              onChange={(event, value: any) => searchCode(value?.label, true)}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <label>Search by Service Description or Code</label>
            <TextField
              {...textProps}
              onChange={(e) => searchCode(e.target.value)}
              placeholder="Description or CPT/HCPCS/DRG Code"
            />
          </Grid>
          <Grid item xs={12} sx={{ p: 1 }}>
            <label>Services</label>
            <FormControl error={serviceError} sx={{ width: "100%" }}>
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
                  <option key={i} value={item?.id}>
                    {item.label}
                  </option>
                ))}
              </Select>
              <FormHelperText>
                {serviceError ? "Service type required" : null}
              </FormHelperText>
            </FormControl>
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
              }}  onClick={() => setAct(1)} >
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
      </form> */}
    </>
  );
}
