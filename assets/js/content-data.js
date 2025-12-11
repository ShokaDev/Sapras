// Shared Content Data
const contentData = {
    'ferry': {
        title: 'Ferry Safety Manual',
        category: 'Transportation',
        date: 'Updated Dec 2023',
        readTime: '5 Mins Read',
        img: 'assets/img/kapal.jpeg',
        content: `
      <p><strong>Introduction</strong></p>
      <p>This manual provides essential safety information for passengers traveling on ferries between Batam and Singapore. Please read carefully.</p>
      <h3>1. Life Jackets</h3>
      <p>Life jackets are located under your seat. In case of emergency, retrieve the jacket, place it over your head, and fasten the straps securely. Do not inflate the jacket while inside the cabin.</p>
      <h3>2. Emergency Exits</h3>
      <p>Exits are clearly marked with green signs. Locate the nearest exit upon boarding. Crew members will direct you during an evacuation.</p>
      <h3>3. Prohibition</h3>
      <p>Smoking is strictly prohibited in the passenger cabin. Please use designated smoking areas on the open deck if available.</p>
    `,
        quiz: [
            { q: 'Where are life jackets located?', opts: { a: 'Overhead bin', b: 'Under your seat', c: 'At the counter' }, ans: 'b' },
            { q: 'When should you inflate the life jacket?', opts: { a: 'Inside the cabin', b: 'Before boarding', c: 'Outside the cabin' }, ans: 'c' },
        ]
    },
    'hotel': {
        title: 'Hotel Check-in Procedure',
        category: 'Hospitality',
        date: 'Nov 15, 2023',
        readTime: '7 Mins Read',
        img: 'assets/img/hotel.jpg',
        content: `
      <p><strong>Standard Operating Procedure for Front Desk Agents</strong></p>
      <p>The check-in process is the first impression a guest has of the hotel. It must be efficient and welcoming.</p>
      <h3>Step 1: Greeting</h3>
      <p>Greet the guest with a warm smile and standard phrase: "Welcome to Grand Batam Hotel, how may I assist you today?"</p>
      <h3>Step 2: Verification</h3>
      <p>Request the guest's ID card or passport and booking confirmation. Verify the dates and room type in the system.</p>
      <h3>Step 3: Registration</h3>
      <p>Ask the guest to sign the registration card. Confirm the payment method and take a deposit if required.</p>
    `,
        quiz: [
            { q: 'What is the first step?', opts: { a: 'Ask for ID', b: 'Greeting', c: 'Payment' }, ans: 'b' },
            { q: 'What must be verified?', opts: { a: 'Dates and Room Type', b: 'Flight number', c: 'Shoe size' }, ans: 'a' }
        ]
    },
    'festival': {
        title: 'Binut Culture Carnival 2022',
        category: 'Culture',
        date: 'Oct 30, 2022',
        readTime: '6 Mins Read',
        img: 'assets/img/gunung.jpg',
        content: `
    <p><strong>DISKOMINFO KEPRI</strong> – A variety of cultural attraction performances successfully drew thousands of spectators during the 2022 Binut Culture Carnival, an event aimed at introducing Malay culture to both local and international tourists.</p>
    <p>The 2022 Binut (North Bintan) Culture Carnival is the first event of its kind ever held in Bintan Regency. It received full support from the Chairperson of the Riau Islands Provincial PKK Team, Hj. Dewi Kumalasari Ansar.</p>
    <p>“We give our highest appreciation for the overwhelming enthusiasm shown by the people of Bintan Regency who packed the entire Anwarika Field to watch the Binut Culture Carnival,” Dewi Ansar said during the event.</p>
    <p>She also stated that the carnival would allow Bintan Regency to expand activities that showcase Malay and Nusantara archipelago culture to the wider public.</p>
    `,
        quiz: [
            { q: 'What was the main aim of the carnival?', opts: { a: 'To introduce Malay culture', b: 'To announce a new government', c: 'To hold a sports competition' }, ans: 'a' },
            { q: 'Where was the event held?', opts: { a: 'Jakarta', b: 'Anwarika Field, Tanjung Uban', c: 'Bali' }, ans: 'b' }
        ]
    }
};

// Export for usage if needed, or simple global attach
window.contentData = contentData;
