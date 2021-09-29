<header class="main-nav">
    <div class="sidebar-user text-center"><a class="setting-primary" href="javascript:void(0)"><i data-feather="settings"></i></a><img class="img-90 rounded-circle" src="../assets/images/dashboard/1.png" alt="">
      <div class="badge-bottom"><span class="badge badge-primary">New</span></div><a href="user-profile.html">
        <h6 class="mt-3 f-14 f-w-600">{{ Auth::user()->name }}</h6></a>
      <p class="mb-0 font-roboto">{{!empty(Auth::user()->roles[0]->name) ? Auth::user()->roles[0]->name : "Author" }}</p>
      
    </div>
    @php
    $sidebar=sideBarMenu();
    // dd($sidebar);
    @endphp
    <nav>
      <div class="main-navbar">
        <div class="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
        <div id="mainnav">
          <ul class="nav-menu custom-scrollbar">
            <li class="back-btn">
              <div class="mobile-back text-end"><span>Back</span><i class="fa fa-angle-right ps-2" aria-hidden="true"></i></div>
            </li>

            @foreach ($sidebar as $menu)
             @if(!empty($menu['heading']))
             <li class="sidebar-main-title">
                <div>
                  <h6>{{$menu['heading']}}</h6>
                </div>
              </li>
            @endif
            @if(!empty($menu['menu']))
              <li class="dropdown" ><a class="nav-link menu-title" href="javascript:void(0)"> <i data-feather="{{$menu['menu']['icon']}}" ></i> <span>{{$menu['menu']['title']}}</span></a>
                <ul class="nav-submenu menu-content">
                    @foreach ($menu['menu']['sub_menu'] as $item)
                      <li @if(isset($item['v-can'])) v-can="'{{$item['v-can']}}'" @endif><router-link to="{{$item['v-route']}}" >{{$item['title']}}</router-link></li>
                    @endforeach

                </ul>
              </li>
            @endif
            @if(!empty($menu['single_link']))

            <li class="dropdown" @if(isset($item['v-can'])) v-can="'{{$item['v-can']}}'" @endif><router-link to="{{$menu['single_link']['v-route']}}" class="nav-link menu-title link-nav" > <i data-feather="{{$menu['single_link']['icon']}}" ></i>   <span>{{$menu['single_link']['title']}}</span></router-link></li>
            @endif
            @endforeach

          </ul>
        </div>
        <div class="right-arrow" id="right-arrow"><i data-feather="arrow-right"></i></div>
      </div>
    </nav>
  </header>
