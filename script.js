document.getElementById('connectBtn').onclick = async () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    document.getElementById('walletAddress').innerText = "Connected: " + accounts[0];
  } else {
    alert("Please install MetaMask!");
  }
};
