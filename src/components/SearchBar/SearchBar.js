import React , {useState,useEffect} from 'react';
import Input from "../Input";
import { SearchNormal } from '../Icons';
import { useRouter } from 'next/router'



const SearchBar = () => {
    const router = useRouter();
    const [query, setQuery] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        if(query.length && router.query.q){
            router.push(`${'/search?q='}${query}`,  { shallow: true })
        }else if(query.length){
            router.push(`${'/search?q='}${query}`)
        }
        else{
            setQuery('');
        }
    }

    // useEffect(()=> {
    //     setQuery(router.query.q || "")
    // }, []);

    
    // useEffect(()=> {
    //     router.push(`${'/search?q='}${query}`,  { shallow: true })
    // }, [query]);


    return (
        <form onSubmit={(e)=>formSubmit(e)}>
            <Input
              leftIcon={<SearchNormal />}
              labelText="Search Movies or TV Shows"
              placeholder={"Ag. Avengers"}
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
            />
        </form>
    );
}

export default SearchBar;
