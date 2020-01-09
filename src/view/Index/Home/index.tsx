import React,{useEffect} from 'react';
import useStore from '../../../utils/useStore';
import {useObserver} from 'mobx-react-lite';

const Home:React.FC = () => {
    let store=useStore();
    let {Home}=store;
    useEffect(()=>{
        Home.homeData()
    })
    return (
        <div>shouye </div>
    );
};

export default Home;