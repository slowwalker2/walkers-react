import React, { useState, useEffect, useRef } from 'react';
import { StarRating } from './starRating';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';
import { FaPenSquare } from 'react-icons/fa';
import Note from '../components/Editor';
import NoteViewer from './EditorViewer';
import { BlueButton } from './button';

export default function LinkArticleViewComponent({ data }) {
  const { addToast } = useToasts();
  const [rating, setRating] = useState(null);
  const [note, setNote] = useState('');
  const [noteEditMode, setNoteEditMode] = useState(false);
  const editorRef = useRef();

  useEffect(() => {
    if (data.rating && data.rating.length >= 1) {
      setRating(data.rating[0].value);
    }
  }, [data.rating]);

  useEffect(() => {
    if (data.note) {
      console.log('aaa', data.note.body);
      setNote(data.note.body);
    }
  }, [data.note]);

  const onStarClick = (nextValue) => {
    axios
      .post(`${process.env.REACT_APP_JETS_URI}/user_links/${data.id}/rating`, {
        user_link: { value: nextValue },
      })
      .then((results) => {
        addToast('Submitted.', {
          appearance: 'success',
          transitionDuration: 0,
          autoDismissTimeout: 2000,
          autoDismiss: true,
        });
        setRating(nextValue);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateNote = () => {
    const body = editorRef.current.getInstance().getMarkdown();
    axios
      .post(`${process.env.REACT_APP_JETS_URI}/user_links/${data.id}/note`, {
        user_link: { note: body },
      })
      .then((results) => {
        addToast('Submitted.', {
          appearance: 'success',
          transitionDuration: 0,
          autoDismissTimeout: 2000,
          autoDismiss: true,
        });
        setNote(body);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div class='max-w-sm w-full lg:max-w-full lg:flex'>
        <div
          class='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border border-gray-400'
          style={{
            'background-image': "url('" + data.userdata.image + "')",
            opacity: '0.9',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
          title='Woman holding a mug'></div>
        <div class='border-r border-b border-l border-gray-400 w-full lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal z-10'>
          <div class='mb-8'>
            <div class='text-gray-900 font-bold text-xl mb-2'>
              <a href={data.userdata.site_url} target='_blank' rel='noopener noreferrer'>
                {data.userdata.title}
              </a>
            </div>
            <p class='text-gray-700 text-base'>{data.userdata.description}</p>
          </div>
        </div>
      </div>

      <div class='max-w-sm w-full lg:max-w-full lg:flex mt-1'>
        <div class='border-r border-b border-l border-gray-400 w-full lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 justify-between leading-normal z-10'>
          <div class='flex flex-col'>
            <StarRating value={rating} onClickEvent={(nextValue) => onStarClick(nextValue)} />
            <div class=''>
              <FaPenSquare
                class='cursor-pointer'
                onClick={() => {
                  setNoteEditMode(!noteEditMode);
                }}
              />
            </div>
          </div>
          <div>
            {noteEditMode ? (
              <div>
                <Note initialValue={note} editorRef={editorRef}></Note>
                <div class='flex'>
                  <BlueButton btnClick={() => updateNote()} text='저장' className='mt-2' />
                </div>
              </div>
            ) : (
              <NoteViewer initialValue={note}></NoteViewer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
