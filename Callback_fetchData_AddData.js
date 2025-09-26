function addData(url, data, callback) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Lỗi khi thêm dữ liệu');
        }
        return response.json();
    })
    .then(result => {
        callback(null, result);
    })
    .catch(error => {
        callback(error, null);
    });
}

function handleAddData(error, result) {
    if (error) {
        console.error('Lỗi khi thêm dữ liệu:', error);
    } 
    if (result) {
        console.log('Dữ liệu đã được thêm thành công:', result);
    }
}

const apiUrl = 'https://656d3ffbbcc5618d3c22ee91.mockapi.io/product';

const newData = {
    name: "TrinhDaLamBai",
    price: 10000,
    description: "Thay xem co duoc khong",
};

addData(apiUrl, newData, handleAddData);
