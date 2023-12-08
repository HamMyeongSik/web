const teams = [

        { name: "토트넘", country: "영국", link: "토트넘.html" },
        { name: "바르셀로나", country: "스페인", link: "바르셀로나.html" },
        { name: "바이에른 뮌헨", country: "독일", link: "바이에른뮌헨.html" },
        { name: "맨체스터 유나이티드", country: "영국", link: "맨체스터유나이티드.html" },
        { name: "레알 마드리드", country: "스페인", link: "레알마드리드.html" },
        { name: "리버풀", country: "영국", link: "리버풀.html" },
        { name: "AC 밀란", country: "이탈리아", link: "AC밀란.html" },
        { name: "파리 생제르맹", country: "프랑스", link: "파리생제르맹.html" },
        { name: "맨체스터 시티", country: "영국", link: "맨체스터시티.html" },   
  ];
  
  function searchTeam() {
    const searchTerm = document.getElementById("teamSearch").value.toLocaleLowerCase();
    const teamResults = document.getElementById("teamResults");
  
    teamResults.innerHTML = ""; // Clear previous results
  
    const filteredTeams = teams.filter(team => 
      team.name.toLocaleLowerCase().includes(searchTerm) || 
      team.country.toLocaleLowerCase().includes(searchTerm)
    );
  
    filteredTeams.forEach(team => {
      const teamCard = document.createElement("div");
      teamCard.classList.add("team-card");
  
      const teamLink = document.createElement("a");
      teamLink.href = team.link;
      teamLink.target = "_blank";
      teamLink.textContent = `${team.name} (${team.country})`;
  
      teamCard.appendChild(teamLink);
      teamResults.appendChild(teamCard);
    });
  }
  
  function clearResults() {
    document.getElementById("teamResults").innerHTML = "";
    document.getElementById("teamSearch").value = "";
  }

