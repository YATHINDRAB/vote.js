<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Telangana Election</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }

        #voting-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
        }

        .option {
            margin: 10px;
            padding: 10px;
            cursor: pointer;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        #result {
            margin-top: 20px;
        }

        .party-img {
            max-width: 100px;
            max-height: 100px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <h1>Telangana Election</h1>

    <div id="voting-container">
        <div class="option" id="trsp" onclick="vote('trsp')">
            <img class="party-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Flag_of_the_Telangana_Rashtra_Samithi.svg/800px-Flag_of_the_Telangana_Rashtra_Samithi.svg.png" alt="TRS Symbol">
            <p>Telangana Rashtra Samithi</p>
        </div>
        <div class="option" id="inc" onclick="vote('inc')">
            <img class="party-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/INC_Symbol.svg/800px-INC_Symbol.svg.png" alt="INC Symbol">
            <p>Indian National Congress</p>
        </div>
    </div>

    <div id="result"></div>

    <script src="app.js"></script>
</body>
</html>
let votes = {
    trsp: 0,
    inc: 0
};

function vote(party) {
    votes[party] += 1;
    updateResult();
}

function updateResult() {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Telangana Rashtra Samithi: ${votes.trsp} votes</p><p>Indian National Congress: ${votes.inc} votes</p>`;
}
