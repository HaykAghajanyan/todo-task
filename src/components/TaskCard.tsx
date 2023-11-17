import { Button, Card } from '@material-ui/core';

import { SingleTaskProps } from '../types';
import { STATUSES } from '../constants';
import React from 'react';

const TaskCard = ({
                    task,
                    isInTrash,
                    onEdit,
                    onRemove,
                    onComplete,
                    handleRestoreTask,
                    handleRemovePermanently,
                  }: SingleTaskProps) => {
  const { id, title, status, deadline, description } = task;

  return (
    <Card key={id}>
      <div>
        <strong>{title}</strong>
      </div>
      <div>{description}</div>
      <div>{deadline}</div>
      <div>Status: {status}</div>
      {
        isInTrash
          ? <>
            {task.status === STATUSES.REMOVED && (
              <>
                <button onClick={() => handleRestoreTask?.(task.id)}>Restore</button>
                <button onClick={() => handleRemovePermanently?.(task.id)}>Remove Permanently</button>
              </>
            )}
          </>
          : <>
            <Button variant='outlined' onClick={() => onEdit?.(task)}>Edit</Button>
            <Button variant='outlined' onClick={() => onRemove?.(id)}>Remove</Button>
            {status === 'Pending' && (
              <Button variant='outlined' onClick={() => onComplete?.(id)}>Mark as Complete</Button>
            )}
          </>
      }

    </Card>
  );
};

export default TaskCard;
