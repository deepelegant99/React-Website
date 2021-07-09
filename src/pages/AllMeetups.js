import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA =[
	{
		id: 'm1',
		title: 'This is a first meetup',
		image:	'https://honeysanime.com/wp-content/uploads/2016/06/Dead-or-Alive-5-wallpaper-660x500.jpg',
		address: 'Meetupstreet 5, 12345 Meetup City',
		description: 'This is first, amazing meetup which you definitely shold not miss.'
	},
	{
		id: 'm2',
		title: 'This is a second meetup',
		image:	'https://www.guinnessworldrecords.com/Images/Tekken-7-main_tcm25-493320.jpg',
		address: 'Meetupstreet 5, 12345 Meetup City',
		description: 'This is second, amazing meetup which you definitely shold not miss.'
	
		
	}
];

function AllMeetupsPage(){
    return(
        <section>
        <div>All Meetups Page</div>
        <MeetupList meetups={DUMMY_DATA} />
        </section>
    )
}

export default AllMeetupsPage;