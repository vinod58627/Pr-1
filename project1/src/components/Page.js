import React, { useState , useEffect} from 'react'
import { Container, Typography , CssBaseline, Box} from '@mui/material'
import Axios  from 'axios'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Image } from 'react-bootstrap';



export default function Page() {
    const [page, setPage]= useState(1)
    const [ udata, usetData] = useState([])
    const [vin , setVin] = useState([])

    useEffect(()=>{
        loadPosts();
    }, [page])
     
    const loadPosts = async()=>{
        const res1= await Axios.get(`http://localhost:3004/posts?_page=${page}`).then((res)=> usetData(res.data));
        const res2= await Axios.get(`https://jsonplaceholder.typicode.com/posts?_start=20&_end=40`).then((res)=> setVin(res.data))
        usetData(res1.data)
        setVin(res2.data)

    }
   


   
  return (<div>
    
    <Typography align="center" color="yellowgreen" variant="h3" >Pagination using M-UI</Typography>
    
    <Typography align="center" color="yellowgreen" variant="h3" >{page}</Typography>
    <CssBaseline />
    <Container component={Box}>
    

    <Stack spacing={4} style={{backgroundColor:'white'}} >
      <Pagination count={15}  color="secondary"  showFirstButton={true} showLastButton={true} page={page} shape="rounded" onChange={(event, value)=>setPage(value)} />
    </Stack>
    </Container>

    <table className="table table-bordered">
        <thead>
            <tr>
                <td>id</td>
                <td>title</td>
                <td>url</td>
                <td>turl</td>

            </tr>
        </thead>
        <tbody>

       
    { 
       udata.map((res, i)=>(
        <tr key={i}>
            <td>{res.id}</td>
            <td>{res.title}</td>
            <td>{res.url}</td>
            <td><Image src={res.url} style={{height:'100px', width:'100px'}} /></td>
        </tr>
    ))}
     </tbody>
    </table> <hr />
    <table className="table table-bordered">
        <thead>
            <tr>
                <td>id</td>
                <td>title</td>
                <td>Body</td>
                <td>Count</td>

            </tr>
        </thead>
        <tbody>

       
    { 
       vin.map((res, i)=>(
        <tr key={i}>
            <td>{res.id}</td>
            <td>{res.title}</td>
            <td>{res.body}</td>
            <td>{res.userId}</td>
        </tr>
    ))}
     </tbody>
    </table>
    
    </div>
  )
}
