import Reac, {useState, useEffect} from "react";
import { request,PERMISSIONS } from "react-native-permissions";
import { Alert, Platform, RefreshControl, StatusBar } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import { Notification } from '../../components/NotificationService'; // Ajuste o caminho se necessário

import { 
    Container, 
    Scroller,
    HeaderAerea,
    HeaderTitle,
    SearchButton, 
    LocationArea, 
    LocationInput,
    LocationFinder,
    LoadingIcon,
    ListArea,
    ImagemContent,
    TopContent
} from "./Styles";
import BarberItem from '../../components/BarberItem'

import Api from "../../Api";
import SearchIcon from '../../assets/SearchIcon-white.svg'
import MyLocationIcon from '../../assets/MyLocationIcon.svg'
import { useNavigation } from "@react-navigation/native";
import MapaImagem from '../../assets/Mapa.svg'


export default () =>{
    const navigation = useNavigation();
    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const handleLocationFinder = async () => {
        setCoords(null);
        let result = await request(
            Platform.OS === 'ios' ?
             PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
             :
             PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if(result == 'granted'){
            setLoading(true);
            setLocationText('');
            setList([]);


            Geolocation.getCurrentPosition((info)=>{
                setCoords(info.coords);
                getBarbers();
            })
        }
    }
    const getBarbers = async () => {
        setLoading(true);
        setList([]);

        let lat = null;
        let lng = null;
        if(coords){
            lat = coords.latitude;
            lng = coords.longitude;
        }

        let res  = await Api.getBarbers(lat, lng, locationText);
        console.log(res);
        if(res.error == ''){
            if(res.loc){
                setLocationText(res.loc);
            }
            setList(res.data);
        }else {
            Alert.alert("ERRO:"+res.error);
        }
        
        setLoading(false);
    }   

    useEffect(()=>{
        getBarbers();
    },[]);

    const onRefresh = ()=> {
        setRefreshing(false);
        getBarbers();
    }

    const handleLocationSearch = () => {
        setCoords({});
        getBarbers();
    }

    const handleSearchButtonClick = () => {
        // Mostrar notificação quando o botão for clicado
        Notification.mostrarNotificacao(
            2, // ID da notificação
            "Busca Iniciada", // Título da notificação
            "Você iniciou uma busca por barbearias.", // Mensagem da notificação
            {}, // Dados extras
            {}  // Opções adicionais
        );
    
        // Navegar para a tela de busca
        navigation.navigate('Search');
    };


    return(
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#176B70" />
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <TopContent>
                    <HeaderAerea>
                        <HeaderTitle numberOfLines={2}>
                            Descubra Barbearias Perto de Você!!
                        </HeaderTitle>
                        <SearchButton onPress={handleSearchButtonClick}>
                            <SearchIcon width="16" height="16" color="#FFFFFF"/>
                        </SearchButton>
                    </HeaderAerea>

                    <LocationArea>
                        <LocationInput 
                            placeholder="Onde você está?"
                            value={locationText}
                            onChangeText={t=>setLocationText(t)}
                            onEndEditing={handleLocationSearch}
                        />
                        <LocationFinder onPress={handleLocationFinder}>
                            <MyLocationIcon width="30" height="30" fill="#ffffff"/>
                        </LocationFinder>
                    </LocationArea>
                    <ImagemContent>
                        <MapaImagem width="100%"/>
                    </ImagemContent>
                        
                </TopContent>
                {loading &&
                    <LoadingIcon size="large" color="#176B70"/>
                }

                <ListArea>
                    {list.map((item, k)=>(
                        <BarberItem key={k} data={item} />
                    ))}
                </ListArea>

            </Scroller>
        </Container>
    )
}