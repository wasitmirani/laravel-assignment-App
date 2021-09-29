<?php

namespace App\Http\Controllers\backend\blog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\Comment;

class BlogController extends Controller
{
    //
    public function getAllBlogs(Request $request){
        $q = request('query');
        $blogs = Blog::where('title', 'like', '%' . $q . '%')
            ->latest()
            ->with('author:id,name')
            ->paginate(env('PER_PAGE'));


        return response()->json(['blogs' => $blogs]);
    }
    public function index(Request $request)
    {
        //
        $q = request('query');
        $blogs = Blog::where('title', 'like', '%' . $q . '%')
            ->where('author_id',$request->user()->id)
            ->orderBy('title', 'ASC')
            ->with('author:id,name')
            ->paginate(env('PER_PAGE'));


        return response()->json(['blogs' => $blogs]);
    }


    public function store(Request $request)
    {


        $request->validate([
            'title' => ['required', 'string', 'max:255'],
        ]);


        $blog = Blog::create(['title' => $request->title, 
                              'description' => $request->description,
                              'author_id'=>$request->user()->id,
                            ]);


        return response()->json($blog);
    }






    public function update(Request $request)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
        ]);

        $blog = Blog::where('id',$request->id)->update([
            'title' => $request->title,
            'description' => $request->description,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {


        Blog::destroy($id);
    }
    public function removeAllBlogs(Request $request){
        $delete = Blog::whereIn('id', json_decode($request->blog_ids))->delete();
        return response()->json(['message' => $delete]);
    }

    public function addComment(Request $request){
        Comment::create(['comment'=>$request->comment,'user_id'=>$request->user()->id,'blog_id'=>$request->blog_id]);
    }   
}
