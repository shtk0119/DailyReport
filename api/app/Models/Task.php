<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Task extends Model
{
  use HasFactory;

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }

  public function TaskSchedules(): HasMany
  {
    return $this->hasMany(TaskSchedule::class);
  }

  public function studyRecords(): HasMany
  {
    return $this->hasMany(StudyRecord::class);
  }

  public function posts(): BelongsToMany
  {
    return $this->belongsToMany(Post::class, 'posts_tasks', 'task_id', 'post_id')->withTimestamps();
  }
}
