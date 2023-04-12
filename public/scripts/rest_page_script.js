const changeRestaurant = async (host,id) => {
    try {
        window.location.replace('http://'+host+'/change-rest?id='+id);
    } catch (errors) {
        console.error(errors);
    }
};

const deleteRestaurant = async (host,id) => {
    try {
        const response = await fetch('http://'+host+'/delete-rest?id='+id, {
            method: "DELETE"
        })

        window.location.replace('http://'+host+'/main');
    } catch (errors) {
        console.error(errors);
    }
};
