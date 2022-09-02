import { useEffect, useState } from "react";
import { Geolocation } from "./Geolocation";

export const useFetch = ( api, isCities ) => {

   const geolocation = Geolocation();

   const [state, setState] = useState({
      data: [],
      isLoading: true
   })

   const randomNum = (param) => {
         let random = Math.floor(1000000 + Math.random() * 9000000);
         param = param.toString().split('.');
         param = `${param[0]}.${random}`;

         return param
   }

   const getFetch = async () => {

      setState({
         ...state,
         isLoading: true,
      });

      let lat = geolocation.latitude;
      let lng = geolocation.longitude;

      if (isCities) {
         lat = randomNum(lat);
         lng = randomNum(lng);
      }

      const resp = await fetch(`https://api.openweathermap.org/data/2.5/${api}?lat=${lat}&lon=${lng}&appid=f6bcf45c7db82e275f9a777e9b288c83&units=metric&lang=sp`);
      const data = await resp.json();

      setState({
         data,
         isLoading: false
      });
   }


   useEffect(() => {
      if (geolocation) {
         getFetch();
      }
   }, [geolocation, api])

   return {
      data: state.data,
      isLoading: state.isLoading
   };
}