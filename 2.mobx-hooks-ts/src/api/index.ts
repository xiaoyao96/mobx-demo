import service from './sevice'

type HomeData = {
  a: string;
}
const ajaxGetHomeData = (data: HomeData) => service.get('api/xxx', { params: data});