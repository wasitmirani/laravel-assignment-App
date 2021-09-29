<?php

namespace App\Http\Controllers\Backend\role;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    //

    public function index()
    {
        //
        $q=request('query');
        $roles=Role::where('name', 'like', '%' . $q . '%')
        ->orderBy('name','ASC')
        ->with('users:id,name','permissions:id,name')
        ->paginate(env('PER_PAGE'));
        $users=User::select('id','name')->orderBy('name','ASC')->get();

       return response()->json(['roles'=>$roles,'users'=>$users]);
    }


    public function store(Request $request)
    {


        $request->validate([
            'name' => ['required', 'string', 'max:255','unique:roles'],
        ]);
        // $users=explode(",",$request->selected_users);

        $user_collection=User::WhereIn('id',  $request->users)->get();

        $role = Role::create(['name' => $request->name]);
        $role->users()->attach($user_collection);

        return response()->json($role);

    }






    public function update(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255','unique:roles,name,'.$request->id],
        ]);

        $user_collection=User::WhereIn('id',  $request->users)->get();

        $role = Role::find($request->id);
        $role->name=$request->name;
        $role->save();
        $role->users()->sync($user_collection);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {


      Role::destroy($id);
    }
}
