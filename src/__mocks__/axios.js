const axiosInstance = jest.genMockFromModule('axios');

axiosInstance.create = jest.fn(() => axiosInstance);

export default axiosInstance;
