import axiosClient from '@/lib/axiosClient';

export const requireAuthentication = async (content: any, cb) => {
	try {
    const response = await axiosClient.get("/dashboard");
    const user = await response.data;
  } catch(e) {
      return {
        redirect: {
          destination: "/login",
          permanent: false
        }
      }
  }

  cb();
}