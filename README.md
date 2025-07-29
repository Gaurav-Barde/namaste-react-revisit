# namaste-react-revisit

Revisiting Namaste React web series

/_
-AppLayout
-Header
-Logo
-Nav Links
-Home
-About
-Contact
-Cart
-Body
-Search
-Input
-Button
-Restaurant Container
-ResCard
-Res Image
-Restaurant Name, Star Rating, Cuisine, Delivery Time
-Footer
-Copyright
-Links
-Address
-Contact
_/

/\*
Config Driven UI Example

const config = {
formConfig: [
{ label: "Name", type: "text", name: "name" },
{ label: "Mobile Number", type: "number", name: "mobile" },
],
};

const Form = ({ formConfig }) => {
return formConfig.map((formdata, i) => {
return (
<div key={i}>
<label htmlFor={formdata.name}>{formdata.label}</label>
<input type={formdata.type} name={formdata.name} id={formdata.name} />
</div>
);
});
};

      <Form formConfig={config.formConfig} />

\*/
