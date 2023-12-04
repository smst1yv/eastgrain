import axios from 'axios'
const HTTP = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    headers:{
        "Content-Type": "application/json"
    }
})

export const storedLanguage = async () => {
    return localStorage.getItem('lang')  ?? 'az';
 };

export const GetStrive = async () => {
    try {
        const response = await HTTP.get('/strive');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};

export const GetSustani = async () => {
    try {
        const response = await HTTP.get('/sustani');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};
export const GetStory = async () => {
    try {
        const response = await HTTP.get('/story');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};

export const GetTeamImage = async () => {
    try {
        const response = await HTTP.get('/teamimage');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};
export const GetTeam = async () => {
    try {
        const response = await HTTP.get('/team');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};

export const GetHungary = async () => {
    try {
        const response = await HTTP.get('/hungary');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};

export const GetHomeImage = async () => {
    try {
        const response = await HTTP.get('/headimage');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};

export const GetHomeSlider = async () => {
    try {
        const response = await HTTP.get('/slider');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};

export const GetHomeCounter = async () => {
    try {
        const response = await HTTP.get('/counter');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};

export const GetCarrer = async () => {
    try {
        const response = await HTTP.get('/carrer');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};

export const GetTrade = async () => {
    try {
        const response = await HTTP.get('/trade');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};

export const GetBlog = async () => {
    try {
        const response = await HTTP.get('/blog');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};
export const GetBlogImage = async () => {
    try {
        const response = await HTTP.get('/blogimage');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};
export const GetLogistic = async () => {
    try {
        const response = await HTTP.get('/logistic');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};
export const GetStorage = async () => {
    try {
        const response = await HTTP.get('/storage');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};
export const GetStorageMap = async () => {
    try {
        const response = await HTTP.get('/storagemap');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};
export const GetProcess = async () => {
    try {
        const response = await HTTP.get('/process');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};

export const GetIntegration = async () => {
    try {
        const response = await HTTP.get('/integration');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};
export const GetAboutMenu = async () => {
    try {
        const response = await HTTP.get('/aboutmenu');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};
export const GetDropMenu = async () => {
    try {
        const response = await HTTP.get('/dropmenu');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};
export const GetMenu = async () => {
    try {
        const response = await HTTP.get('/menu');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};
export const GetSocial = async () => {
    try {
        const response = await HTTP.get('/social');
        return response.data;
    } catch (error) {
        console.error('Error fetching strive data:', error);
        throw error; 
    }
};


