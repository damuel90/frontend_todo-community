const sortData = (data=[], userId) => (
    data.reduce((acum, current) => {
        if(current.create === userId){
            let { created = [] } = acum;
            created.push(current)
            return {...acum, created};
        }else{
            let { collaborated = [] } = acum;
            collaborated.push(current)
            return {...acum, collaborated};
        }
    }, { created:[], collaborated:[] })
);

export default sortData;