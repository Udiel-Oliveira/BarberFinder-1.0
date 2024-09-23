import PushNotification from 'react-native-push-notification'

class NotificationService {
    // Criar Canais
    criarCanal = () => {
        PushNotification.createChannel(
            {
            channelId: "notificador",
            channelName: "Notificador do App",
            channelDescription: "Meu Canal de Notificações do Aplicativo"
        }, 
        (created) => console.log(`createChannel returned '${created}'`)
        )
    }


    configurar = () => {
        //Configuração do disparo de notificação
        PushNotification.configure({
            onRegister: function(token){
                console.log("[NotificationManeger] onRegister token:", token)
            },
            onNotification: function (notification) {
                console.log("[NotificationManeger] onNotification:", notification)
               // notification.finish(PushNotificationIOS.fetchResult.NoData);
            }
        })
    }

    //Construir a notificação
    construitNotificacaoAndroid = (id, title, message, data={}, options={}) => {
        return{
            id: id,
            channelId: "notificador",
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || "",
            subText: title || "",
            vibrate: options.vibrate || false,
            vibrate: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }

    //Mostrar Notificação
    mostrarNotificacao = (id, title, message, data={}, options={}) => {
        PushNotification.localNotification({
            ...this.construitNotificacaoAndroid(id, title, message, data, options),
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || "default",
            userInteraction: false
        })
    }

    //Cancelar Todas AS Notificações
    cancelarTodasNotificacoes = () => {
        PushNotification.cancelAllLocalNotifications();
    }
}

export const Notification = new NotificationService();