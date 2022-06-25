import { useContext } from "react";
import { ProfilContext } from "../../contexts/profil_context";

export function Account(){
    const {profil} = useContext(ProfilContext);
    console.log("account profil",profil);
    const user = profil.user;
    if (user){
        return (
            <>
                <div>account  page</div>
                <p>bienvenue {user.name}</p>
            </>
        )
    }
    else{
        return (
            <><p>erreur aucun utilisateur</p></>
        )
    }

}