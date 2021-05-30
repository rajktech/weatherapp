const Getweather = () => {
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            if (data.cod === 200) {
                console.log(data);
            } else {
                throw data.cod
            }
        })
        .catch(err => {
            console.log(err);
        });
    //});
}

export default Getweather;