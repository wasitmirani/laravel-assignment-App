<?php
namespace App\Helper;

class HelperComponent {

    public static function SideBar(){
        return [
                [
                    "heading"=>"Main",
                ],
                [
                    "single_link" => setSingleLink( "Posts", "book","posts-view","/posts"),
                ],
            [
                "heading" => "Content",

            ],
            [
                    "single_link" => setSingleLink( "Blogs", "link","blogs-view","/blogs"),
            ],
                [
                    "heading"=>"Management",
                    "menu"=>[
                        "title"=>'User Management',
                        "icon"=>"user",
                        "sub_menu"=>[
                            setSubMenu(
                              "Users",
                                null,
                                "users-view",
                                 "/users",
                            ),
                            setSubMenu(
                                "Roles",
                                  null,
                                  "roles-view",
                                   "/roles",
                            ),
                            setSubMenu(
                                "Permissions",
                                  null,
                            "permissions-view",
                                   "/permissions",
                              ),

                        ]

                    ],

                ],

                // [
                //     "single_link" => setSingleLink( "Dashboard","fa fa-users",null,"/"),
                // ],

     ];
    }
}
