import moment from "moment";


export function formatDate() {
  return moment(new Date()).format("Do MMMM YYYY").replace( /(\d)(st|nd|rd|th)/g, '$1<sup>$2</sup>');
}