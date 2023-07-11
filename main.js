
// Sample dataset of 300 people (replace this with your own dataset)
    const peopleData2 = [{
        id: 1,
        name: 'Andrew Adams',
        email: 'john@example.com',
        phone: '123-456-7890',
        address: '124 N Road Ave, Chicago, IL, 60640',
        category: 'Legislative',
      },
      {
        id: 2,
        name: 'Beth Huntsdorfer',
        email: 'jane@example.com',
        phone: '987-654-3210',
        category: 'State Agencies',
      },
      {
        name: 'Hannah Meisel',
        email: 'john@example.com',
        phone: '123-456-7890',
        category: 'Constitutional Officers',
      },
      {
        name: 'Peter Hancock',
        email: 'john@example.com',
        phone: '123-456-7890',
        category: 'Judicial'
      },
      {
        name: 'Grace Kinnicut',
        email: 'john@example.com',
        phone: '123-456-7890',
        category: 'Constitutional Officers'
      },
      {
        name: 'Grace Barbic',
        email: 'john@example.com',
        phone: '123-456-7890',
        category: 'Constitutional Officers'
      },
      {
        name: 'Nika Schoonover',
        email: 'john@example.com',
        phone: '123-456-7890',
        category: 'Judicial'
      },
      {
        name: 'Jen Fuller',
        email: 'john@example.com',
        phone: '123-456-7890',
        category: 'Legislative'
      },
      {
        name: 'Molly Parker',
        email: 'john@example.com',
        phone: '123-456-7890',
        category: 'Legislative'
      },
      {
        name: 'Jeff Rogers',
        email: 'john@example.com',
        phone: '123-456-7890',
        category: 'Legislative'
      },
      {
        name: 'Raymon Troncoso',
        email: 'john@example.com',
        phone: '123-456-7890',
        category: 'Legislative'
      },
      // ... Add the remaining 295 people data objects here
    ];

    // Function to the directory entries for a specific category
    function renderDirectory(category, people) {
      const peopleList = document.getElementById(`${category.toLowerCase().replace(/\s/g, '-')}-people-list`);
      peopleList.innerHTML = '';
      people.forEach((person) => {
        if (person.category === category) { // Add this condition to filter people by category
          const row = document.createElement('tr');
          const nameCell = document.createElement('td');
          const nameLink = document.createElement('a');
          nameLink.textContent = person.name;
          nameLink.href = `details_v2.html?id=${encodeURIComponent(person.id)}`;
          nameLink.target = '_blank';
          nameLink.classList.add('name-link');
          nameCell.appendChild(nameLink);
          const emailCell = document.createElement('td');
          emailCell.textContent = person.email;
          const phoneCell = document.createElement('td');
          phoneCell.textContent = person.phone;
          row.appendChild(nameCell);
          row.appendChild(emailCell);
          row.appendChild(phoneCell);
          // Add click event listener to highlight the selected row and open new page
          row.addEventListener('click', () => {
            window.location.href = nameLink.href;
          });
          // Add hover effect to highlight the row
          row.addEventListener('mouseover', () => {
            row.classList.add('selected-row');
          });
          row.addEventListener('mouseout', () => {
            row.classList.remove('selected-row');
          });
          peopleList.appendChild(row);
        }
      });
    }
    // Function to filter the people based on the search query
    function filterPeople(query) {
      const filteredPeople = peopleData.filter((person) => {
        const name = person.name.toLowerCase();
        const email = person.email.toLowerCase();
        const phone = person.phone.toLowerCase();
        return (
          name.includes(query) ||
          email.includes(query) ||
          phone.includes(query)
        );
      });
      renderDirectory('Legislative', filteredPeople);
      renderDirectory('State Agencies', filteredPeople);
      renderDirectory('Constitutional Officers', filteredPeople);
      renderDirectory('Judicial', filteredPeople);
    }
    // Initial rendering of the directory
    renderDirectory('Legislative', peopleData);
    renderDirectory('State Agencies', peopleData);
    renderDirectory('Constitutional Officers', peopleData);
    renderDirectory('Judicial', peopleData);
    // Event listener for search input
    
      const searchInput = document.getElementById('search');
      searchInput.addEventListener('input', () => {
      const searchQuery = searchInput.value.toLowerCase();
      filterPeople(searchQuery);
    });
    
      function toolfun(e) {
        var x = e.clientX;
        var y = e.clientY;
        document.getElementById("tooltip").style.left = x + "px";
     document.getElementById("tooltip").style.top = y + "px";
    }
