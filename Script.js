// Function to show the Memories section and hide the Landing section
function showMemories() {
    document.getElementById('landing').style.display = 'none'; // Hide the landing section
    document.getElementById('memories').style.display = 'block'; // Show the memories section
}

// Function to show the Final Ask section and hide the Memories section
function showFinalPage() {
    document.getElementById('memories').style.display = 'none'; // Hide the memories section
    document.getElementById('final').style.display = 'block'; // Show the final ask section
}

// Function to show the Response section and hide the Final Ask section
function showResponse() {
    document.getElementById('final').style.display = 'none'; // Hide the final ask section
    document.getElementById('response').style.display = 'block'; // Show the response section
}
