<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
	public static $wrap = 'user';

	public function toArray(Request $request): array
	{
		return [
			'id' => $this->id,
			'name' => $this->name,
			'email' => $this->email,
			'password' => $this->password,
			'group' => $this->group,
			'is_active' => $this->is_active,
			'is_posted' => $this->is_posted
		];
	}
}
