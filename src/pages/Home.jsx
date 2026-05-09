import React,{useEffect,useState}from'react';import{supabase}from'../lib/supabase.js';import{requireAuth}from'../lib/auth.js';import*as S from'../styles.js';
export default function Home(){
  const[agreements,setAgreements]=useState([]);
  useEffect(()=>{requireAuth(window.location.href);supabase.from('agreements').select('*').order('created_at',{ascending:false}).then(({data})=>setAgreements(data||[]));  },[]);
  const statusColor=s=>({draft:'#64748b',active:'#22c55e',completed:'#0ea5e9',disputed:'#dc2626'}[s]||'#64748b');
  return React.createElement('div',{style:S.page},
    React.createElement('div',{style:{display:'flex',justifyContent:'space-between',marginBottom:'1.5rem'}},React.createElement('h1',{style:{...S.h1,marginBottom:0}},'IT-S Law'),React.createElement('button',{style:S.btn,onClick:()=>window.location.href='/new'},'+ New Agreement')),
    agreements.length===0&&React.createElement('div',{style:S.card},React.createElement('p',{style:S.muted},'No agreements yet.')),
    agreements.map(a=>React.createElement('div',{key:a.id,style:{...S.card,cursor:'pointer'},onClick:()=>window.location.href='/agreement/'+a.id},
      React.createElement('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},React.createElement('h2',{style:S.h2},a.title),React.createElement('span',{style:S.badge(statusColor(a.status))},a.status)),
      React.createElement('p',{style:S.muted},new Date(a.created_at).toLocaleDateString())
    ))
  );
}