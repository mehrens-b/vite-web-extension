import { Lionet, Advisee } from "@src/lionet/Lionet";
import React, { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


export default function Advisees(): JSX.Element {
    const [advisees, setAdvisees] = useState<Advisee[]>([]);

  useEffect(() => {
    
     Lionet.getAdvisees().then((d:Advisee[]) => {
        setAdvisees(d);
        console.log(d);
    });
  }, []);

  const adviseeListItems = advisees.map( a => 
    <ListItem key={a.nameid}>
       <ListItemAvatar>
          <Avatar src={"/StudentSelfService/ssb/adviseePicture/picture?bannerId=" + a.picture} />
        </ListItemAvatar>
        <a href={a.studentUrl} target="_blank">{a.nameid}</a> - {a.major}
      </ListItem>

  )

  return (
    <div>
        <h1>Adviseess</h1>
        <List>
            {adviseeListItems}
        </List>
    </div>
  );
}

function Advisee(data:Advisee){
    return (
        <li>{data.nameid} - {data.major}</li>
    )
}
