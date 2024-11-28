import { useState } from "react";
import Button from "./Component/Button";
import Card from "./Component/Card";


function App() {
  const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];
const [user, setUser] = useState('')
 function setUser() {
  return "john";
 }
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button link="com" name="click me now now" /> */}
    {/* {
      companies.map((company) => (
        // <Card name={company.name} category={company.category} start />
        
      )) */}
    
      </header>
    </div>
  );
}
export default App;
