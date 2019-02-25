import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) =>(
   <div>

       <Head>
           <title>Abbeycraft Artworld</title>
           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossorigin="anonymous"/>
       </Head>
       <Navbar/>
       {props.children}
   </div>     

);

export default Layout;