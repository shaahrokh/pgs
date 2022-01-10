function loadEnvirementVariable(keyname: string) : any{
    const envVar = process.env[keyname];

    if(!envVar) {
        throw new Error(`Must include ${keyname}` )
    }

    return envVar
}

export default {
    postgresUri : loadEnvirementVariable('POSTGRES_URI'),
}