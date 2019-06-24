import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization:
			'Client-ID d05b378edb4a53778f913f530ab0df2a09c70c4bfdcaeb7dbb11508ad67ab764'
	}
});
