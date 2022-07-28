import React, { useEffect, useState } from "react";


export const Digest = ({first, last}) => {
    const [digest, setDigest] = useState('')
    const getDigest = async () => {
        try {
          const response = await fetch(
            `https://api.hashify.net/hash/md4/hex?value=${first}${last}`);
            // console.log(response)
            const json = await response.json();
            setDigest(json);
            return json;
          } catch (error) {
            console.error(error);
            setDigest([]);
          } 
        };

        useEffect(() => {
            getDigest()
        },[])
    
    return(
        <ul>
            <li>Digest: {digest.Digest}</li>
            {/* <li>DigestEnc: {digest.DigestEnc}</li>
            <li>Type: {digest.Type}</li>
            <li>Key: {digest.Key}</li> */}
        </ul>
    )
} 