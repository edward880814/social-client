import { closeModal } from '@redux/reducers/modal/modal.reducer';
import { clearPost, updatePostItem } from '@redux/reducers/post/post.reducer';

export class PostUtils {
  static selectBackground(bgColor, postData, setTextAreaBackground, setPostData, setDisable) {
    postData.bgColor = bgColor;
    setTextAreaBackground(bgColor);
    setPostData(postData);
    setDisable(false);
  }

  static postInputEditable(textContent, postData, setPostData, setDisable) {
    postData.post = textContent;
    setPostData(postData);
    setDisable(false);
  }

  static closePostModal(dispatch) {
    dispatch(closeModal());
    dispatch(clearPost());
  }

  static clearImage(postData, post, inputRef, dispatch, setSelectedPostImage, setPostImage, setPostData, setDisable) {
    postData.gifUrl = '';
    postData.image = '';
    postData.video = '';
    setSelectedPostImage(null);
    setPostImage('');
    setTimeout(() => {
      if (inputRef?.current) {
        inputRef.current.textContent = !post ? postData?.post : post;
        if (post) {
          postData.post = post;
        }
        setPostData(postData);
      }
    });
    dispatch(
      updatePostItem({ gifUrl: '', image: '', imgId: '', imgVersion: '', video: '', videoId: '', videoVersion: '' })
    );
  }

  static postInputData(imageInputRef, postData, post, setPostData) {
    setTimeout(() => {
      if (imageInputRef?.current) {
        imageInputRef.current.textContent = !post ? postData?.post : post;
        if (post) {
          postData.post = post;
        }
        setPostData(postData);
      }
    });
  }
}
