import logo from './logo.svg';
import './App.css';


import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api-mock.dhl.com/mydhlapi/rates',
  params: {
    accountNumber: '962421518 ',
    originCountryCode: 'IL',
    originCityName: 'PETACH TIKVA',
    destinationCountryCode: 'IL',
    destinationCityName: 'ROSH HAAYIN',
    weight: 5,
    length: 15,
    width: 10,
    height: 5,
    plannedShippingDate: '2023-01-16',
    isCustomsDeclarable: false,
    unitOfMeasurement: 'metric'
  },
  headers: {
    Authorization: 'Basic REPLACE_BASIC_AUTH'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});




function quta() {
  return (
    <div className="App">
    
    </div>
  );
}

export default quta;
