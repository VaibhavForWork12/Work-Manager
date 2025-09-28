import React from 'react'
import { resolve } from 'styled-jsx/css'

async function takeTime()
{
    await new Promise((resolve)=>{
        setTimeout(resolve, 3000);
    });
}

export default async function about()
{
await takeTime();
//throw new Error("this is vaibhav error")
  return (
    <div>About in the div section of the File
        <h1>This is about page
        </h1>
    </div>
  );
}


