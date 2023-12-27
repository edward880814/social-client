import { socketService } from '@services/socket/socket.service';
import { cloneDeep, find, findIndex, remove } from 'lodash';

export class NotificaationUtils {
  static socketIONotification(profile, notifications, setNotifications, type, setNotificationsCount) {
    socketService?.socket?.on('insert notification', (data, userToData) => {
      if (profile?._id === userToData.userTo) {
        notifications = [...data];
        if (type === 'notificationPage') {
          setNotifications(notifications);
        } else {
          const mappedNotifications = NotificationUtils.mapNotificationDropdownItems(
            notifications,
            setNotificationsCount
          );
          setNotifications(mappedNotifications);
        }
      }
    });

    socketService?.socket?.on('update notification', (notificationId) => {
      notifications = cloneDeep(notifications);
      const notificationData = find(notifications, (notification) => notification._id === notificationId);
      if (notificationData) {
        const index = findIndex(notifications, (notification) => notification._id === notificationId);
        notificationData.read = true;
        notifications.splice(index, 1, notificationData);
        if (type === 'notificationPage') {
          setNotifications(notifications);
        } else {
          const mappedNotifications = NotificationUtils.mapNotificationDropdownItems(
            notifications,
            setNotificationsCount
          );
          setNotifications(mappedNotifications);
        }
      }
    });

    socketService?.socket?.on('delete notification', (notificationId) => {
      notifications = cloneDeep(notifications);
      remove(notifications, { _id: notificationId });
      if (type === 'notificationPage') {
        setNotifications(notifications);
      } else {
        const mappedNotifications = NotificationUtils.mapNotificationDropdownItems(
          notifications,
          setNotificationsCount
        );
        setNotifications(mappedNotifications);
      }
    });
  }
}
