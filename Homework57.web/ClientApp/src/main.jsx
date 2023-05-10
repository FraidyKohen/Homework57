console.log('main-jsx');
import React from 'react';
import ReactDOM from 'react-dom/client'
import NumberTable from './NumberTable';
import 'bootstrap/dist/css/bootstrap.css';
    
ReactDOM.createRoot(document.getElementById('root')).render(
    <NumberTable></NumberTable>)