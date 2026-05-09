import React,{useState,useEffect}from'react';import{supabase}from'../lib/supabase.js';import{requireAuth,getUser}from'../lib/auth.js';import*as S from'../styles.js';
export default function NewAgreement(){
  const[title,setTitle]=useState('');const[terms,setTerms]=useState('');const[s,setS]=useState(false);
  useEffect(()=>requireAuth(window.location.href),[]);
  const create=async()=>{setS(true);const u=getUser();if(!u)return;const{data}=await supabase.from('agreements').insert({creator_id:u.sub,title,terms,status:'draft'}).select().single();if(data){await supabase.from('agreement_parties').insert({agreement_id:data.id,user_id:u.sub,signed:true,signed_at:new Date().toISOString()});window.location.href='/agreement/'+data.id;}setS(false);};
  return React.createElement('div',{style:S.page},React.createElement('h1',{style:S.h1},'New Agreement'),
    React.createElement('div',{style:S.card},
      React.createElement('div',{style:{marginBottom:'1rem'}},React.createElement('label',{style:S.muted},'Agreement Title'),React.createElement('input',{style:{...S.input,marginTop:'0.3rem'},value:title,onChange:e=>setTitle(e.target.value),placeholder:'Service Agreement, NDA, Partnership...'})),
      React.createElement('div',{style:{marginBottom:'1.5rem'}},React.createElement('label',{style:S.muted},'Terms & Conditions'),React.createElement('textarea',{style:{...S.input,marginTop:'0.3rem',minHeight:'300px',resize:'vertical',lineHeight:1.7},value:terms,onChange:e=>setTerms(e.target.value),placeholder:'Enter the full terms of this agreement...'})),
      React.createElement('button',{style:S.btn,onClick:create,disabled:!title||!terms||s},s?'Creating...':'Create Agreement')
    )
  );
}