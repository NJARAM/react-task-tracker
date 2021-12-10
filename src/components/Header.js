import Button from './Button'
 const Header = ({title}) => {

    const onClick = (e) =>{
        console.log('Clicked')
                    }

     return (
         <header className='header'>
             <h1 >{title}</h1>
             <Button color='green' text='Add' onClick={onClick} />
         </header>
     ) 
 }
 Header.defaultProps ={
     title:'Task Tracker',
     name:'Moses'
 }
 //css in js
//  const headingStyle={
//      color:'red',
//      backgroundColor:'black'
//     }
 
 export default Header
 