const { default: axios } = require("axios");

const EmailInput = document.getElementById("email");
const PasswordInput = document.getElementById("password");
console.log(EmailInput);
console.log(PasswordInput);

let email;
let password;

EmailInput.addEventListener("input", (event) => {
    console.log(event.target.value);
    console.log(event);
    email = event.target.value;
});
PasswordInput.addEventListener("input", (event) => {
    console.log(event.target.value);
    console.log(event);
    password = event.target.value;
});

function Submit(event) {
    console.log({ email: EmailInput.innerText });
    event.preventDefault();
    console.log({ email, password });
    if (!email || !password) return alert("Please provide email and password");
    // From here you can send your email and password to the server
}

const DUMMY_DATA = [
    {
        id: "1",
        value: 10,
        region: "USA",
    },
    {
        id: "2",
        value: 20,
        region: "Nigeria",
    },
    {
        id: "3",
        value: 30,
        region: "Kenya",
    },
    {
        id: "4",
        value: 40,
        region: "Ghana",
    },
    {
        id: "5",
        value: 50,
        region: "South Africa",
    },
];

// d3.select("div")
//     .selectAll("p")
//     .data(DUMMY_DATA)
//     .enter()
//     .append("p")
//     .text((dta) => dta.region);

const xScale = d3
    .scaleBand()
    .domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
    .rangeRound([0, 300])
    .padding(0.1);
const yScale = d3.scaleLinear().domain([0, 60]).range([300, 0]);

const container = d3.select("svg").classed("container", true);

container
    .selectAll(".bar")
    .data(DUMMY_DATA)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", xScale.bandwidth())
    .attr("height", (data) => 300 - yScale(data.value))
    .attr("x", (data) => xScale(data.region))
    .attr("y", (data) => yScale(data.value));

this.credentials = Buffer.from(config.CashConnectUsername + ":" + config.CashConnectPassword, "base64");
this.BasicAuth = `Basic ${this.credentials}`;
this.headers = {
    "Content-Type": "application/json; utf-8",
    Accept: "application/json",
    Authorization: this.BasicAuth,
    publicKey: this.cashConnectPublicKey,
};

axios.interceptors.request.use(
    (request) => {
        if (request.url.includes("user") && request.method === "POST") {
            const credentials = Buffer.from(username + ":" + password, "base64");
            const BasicAuth = `Basic ${credentials}`;

            request.headers["Authorization"] = BasicAuth;
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);


