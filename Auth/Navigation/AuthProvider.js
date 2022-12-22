import React, {createContext, useState } from 'react'
import auth from "@react-native-firebase/auth"

export const Authcontext = createContext()
const AuthProvider = ({Children}) => {
    // const [user,setUser]=useState(null)
  return (
    <Authcontext.Provider
    value={{
      
        login:async(email,password)=>{
            try{
              await  auth().signInWithEmailAndPassword(email,password)
            }catch(e){
             console.log(e)
            }
        },
        Signup: async (email,password)=>{
            try{
                await auth().createUserWithEmailAndPassword(email,password)
            }catch(e){
                console.log(e)
            }
        },
        logout:async()=>{
            try{
                await auth().signOut()
            }catch(e){
                console.log(e)
            }
        }
    }}
    >
        {Children}
    </Authcontext.Provider>
  )
}

export default AuthProvider