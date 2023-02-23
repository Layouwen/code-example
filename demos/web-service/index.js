const axios = require('axios')

async function main() {
  // http://www.webxml.com.cn/WebServices/WeatherWebService.asmx?wsdl

  const supportProvinceReqData = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://WebXml.com.cn/">
   <soapenv:Header/>
   <soapenv:Body>
      <web:getSupportProvince/>
   </soapenv:Body>
</soapenv:Envelope>
`

  const supportProvinceRes = await axios.post(
    'http://www.webxml.com.cn/WebServices/WeatherWebService.asmx',
    supportProvinceReqData,
    {
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        SOAPAction: 'http://WebXml.com.cn/getSupportProvince',
      },
    }
  )

  console.log(supportProvinceRes.data)

  const supportCityReqData = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://WebXml.com.cn/">
   <soapenv:Header/>
   <soapenv:Body>
      <web:getSupportCity>
         <!--Optional:-->
         <web:byProvinceName>广东</web:byProvinceName>
      </web:getSupportCity>
   </soapenv:Body>
</soapenv:Envelope>
`

  const supportCityRes = await axios.post(
    'http://www.webxml.com.cn/WebServices/WeatherWebService.asmx',
    supportCityReqData,
    {
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        SOAPAction: 'http://WebXml.com.cn/getSupportCity',
      },
    }
  )

  console.log(supportCityRes.data)
}

main()
