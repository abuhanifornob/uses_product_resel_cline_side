import { useEffect, useState } from "react";


const useRole = (email) => {
    const [userRole, setUserRole] = useState('');
    const [userRoleLoading, setUserRoleLoading] = useState(true);
    console.log(email);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/role/${email}`)
                .then(res => res.json())
                .then(data => {
                    setUserRole(data);
                    setUserRoleLoading(false)
                })
        }

    }, [email])

    return [userRole, userRoleLoading]

}

export default useRole;