export function UserCard({data}){
    return (
        <>
        <h2>Name = {data.name}</h2>
        <h2>Role = {data.role}</h2>
        <h2>Team = {data.team}</h2>
        </>
        
    )
}